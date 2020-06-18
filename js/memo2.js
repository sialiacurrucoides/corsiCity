const init = () => {
    let cellIds = [];
    const cellNumber = $('.cell').length;
    let i;
    for (i = 0; i < cellNumber; i++) {
        cellIds[i] = '#cell' + (i + 1);
    }
    let actualSequenceIndices = [];
    let clickedSequenceIndices = [];

    let currentScore = 0;
    let currentClickScore = 0;
    let currentWin;
    let whichWindow;
    let interval;
    let myInx;
    let newScore;
    let roundNumber = 1;
    const maxRound = 8;
    let clickCounter = 0;
    const dispScore = $('#actualScore');
    const minSpan = 1;
    const startButton = $('.bigStart');
    const storyButton = $('#story');
    const infoButton = $('#info');
    const musicButton = $('#music');
    const music = new Audio;
    music.src = "ChopinNocturne.mp3";
    music.loop = true;
    let elementNr;
    let countStoryShow = 0;
    let countInfoShow = 0;
    let countBigStart = 0;
    let storyPropagation = 1;
    let storyArray = [];
    let madeError = 0;
    let bestScore = 0;
    let toBeShownLineStory = true;

    $.get('./secretStory.txt', function (data) {
        storyArray = data.split(' ');
    });
    let storySoFar = '';

    function fillRandSequences(seqLength) {

        for (i = 0; i < seqLength; i++) {
            actualSequenceIndices[i] = Math.floor(Math.random() * cellNumber);
        }
    }

    function switchOnTheLight(whichWin) {
        $(whichWin).css({ "backgroundColor": "#e0e068" }); //edce44
    }

    function switchToRedLight(whichWin) {
        $(whichWin).css({ "backgroundColor": "#ff4444" });
        setTimeout(switchOffAllTheLights, 500);
    }

    function switchOffAllTheLights() {
        $(".cell").css({ "backgroundColor": "#235f8a" });
    }

    function flash(counter) {
        switchOnTheLight(counter);
        setTimeout(switchOffAllTheLights, 500);
    }

    function showSequence(seqLength) {
        fillRandSequences(seqLength);
        i = 0;
        interval = setInterval(function () {
            myInx = actualSequenceIndices[i];
            whichWindow = cellIds[myInx];
            i++;
            flash(whichWindow);
            if (i == actualSequenceIndices.length || madeError === 1) { clearInterval(interval) };
        }, 1000)


    }

    function compareSequences(seq1, seq2) {
        let j;
        for (j = 0; j < seq1.length; j++) {
            if (seq1[j] !== seq2[j]) {
                return false;
            }
        }
        return true;
    }

    function resetRound() {
        madeError = 1;
        if (elementNr > bestScore) {
            bestScore = elementNr - 1;
            let text = ` ${bestScore}`;
            document.getElementById("best").innerHTML = text;
        };
    }

    function registerClicks() {
        //identify and remember the number of the window
        let clickCounter = 0;
        if (clickCounter < elementNr) {

            $('.containerB').off("click").on("click", function (event) {
                clickedSequenceIndices[clickCounter] = parseInt($(event.target).text()) - 1;
                currentWin = clickedSequenceIndices[clickCounter];
                //flash the window that was clicked  
                if (actualSequenceIndices[clickCounter] == currentWin) {
                    flash(cellIds[currentWin]);
                    currentClickScore++;
                    if (clickedSequenceIndices.length == elementNr) {
                        //reset the click counter for the next session
                        roundNumber++;
                        console.log('compRes', compareSequences(actualSequenceIndices, clickedSequenceIndices));
                        if (compareSequences(actualSequenceIndices, clickedSequenceIndices)) {
                            maxPerformance();
                        } else {
                            resetRound();
                        };
                        showBigStart();
                    }

                } else {
                    switchToRedLight(cellIds[currentWin]);
                    resetRound();
                    showBigStart();
                }
                clickCounter++;

            });
        }


    }

    function revealAWordFromTheStory() {
        let newPiece = "";
        storySoFar += storyArray[storyPropagation - 1] + ' ';
        newPiece += storyArray[storyPropagation - 1] + ' ';
        if (storyArray[storyPropagation - 1].toLowerCase() == 'a') {
            storyPropagation++;
            storySoFar += storyArray[storyPropagation - 1] + ' ';
            newPiece += storyArray[storyPropagation - 1] + ' ';
        };
        storyPropagation++;
        return newPiece;
    }

    function lastWordsBelowField(newMessage) {
        let storyLine = "<div class='newWords'>" + newMessage + "<i class='fa fa-remove'></i></div>";
        //insert the last decoded words below the city, but it should be dismissible
        if (toBeShownLineStory) $(storyLine).insertAfter('.containerB');
        $('.fa-remove').on('click', () => {
            $('.newWords').addClass("hidden");
            toBeShownLineStory = false;
        });
    }

    function maxPerformance() {
        currentScore++;
        if (storyArray[storyPropagation - 1] !== undefined) {
            let newMessage = "";
            for (let s = 1; s < roundNumber; s++) {
                newMessage += revealAWordFromTheStory();
            }
            //last words of the recovered story below the field
            lastWordsBelowField(newMessage);

        };
        changeDisplay();

    }


    function changeDisplay() {
        newScore = ` ${currentScore}/${maxRound}`;
        dispScore.text(newScore);
    }


    function session() {
        showBigStart();
        if (roundNumber == maxRound + 1 || madeError === 1) {
            madeError = 0;
            currentScore = 0;
            changeDisplay();
            roundNumber = 1;
        }
        console.log('Round nr: ' + roundNumber);
        elementNr = minSpan + roundNumber;
        actualSequenceIndices = [];
        showSequence(elementNr);
        clickedSequenceIndices = [];
        clickCounter = 0;
        registerClicks();
    }

    function showStory() {
        $('.storyBox').toggle(400, function () {
            countStoryShow++;
            if (countStoryShow % 2 != 0) {
                $('#townStory').text(storySoFar);
            }
            storyButton.toggleClass('highlighted');
            startButton.toggleClass('disabled');
        });
    }

    function showInfo() {
        console.log('countInfo: ', countInfoShow);
        $('.info').toggle(400, function () {
            countInfoShow++;
            if (countInfoShow % 2 != 0) $('#townStory').text(storySoFar);
            infoButton.toggleClass('highlighted');
            startButton.toggleClass('disabled');
        });
    }

    function showBigStart() {
        console.log('BigStart: ', countBigStart);
        startButton.toggle(400, function () {
            countBigStart++;
        });
    }

    function playMusic() {
        if (music.paused) {
            music.play();
            musicButton.addClass('highlighted');
        } else {
            music.pause();
            musicButton.removeClass('highlighted');
        }
    }

    startButton.off("click").on("click", session);

    /* Pop-up story box */
    storyButton.off("click").on('click', showStory);
    /* Pop-up info*/
    infoButton.off("click").on('click', showInfo);
    musicButton.off("click").on('click', playMusic);

};


$(function () {
    init();
});
