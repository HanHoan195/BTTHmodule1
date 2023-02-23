var good = document.querySelector('.good'),
    fast = document.querySelector('.fast'),
    cheap = document.querySelector('.cheap');
    function click1() {
        // isGood = good.checked;
        // isFast = fast.checked;
        // isCheap = cheap.checked;
        if (good && fast && cheap == cheap) {
            fast = false;
        }
        if (good && fast && cheap == fast) {
            good = false;
        }
        if (good && fast && cheap == good) {
            cheap = false;
        }

    }