module.exports = `<style>
    @keyframes yay {from {filter: hue-rotate(0deg);} to {filter: hue-rotate(360deg)}}
    .csvg-title {
        color: red;
        animation: 1s linear infinite yay;
    }
    body { animation: 1.2s linear infinite yay;}

   @keyframes orbit {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
    .csvg-controls {
        animation: 3s linear infinite orbit;
        transform-origin: 20vw 20vh;
    }


  @keyframes slowboi {
      0%, 50%, 100% {
        transform: translateX(0);
      }
      25% {
      transform: translateX(-12px);
      }
      75% {
      transform: translateX(12px);
      }
    }

    .csvg.generic.hassvg {
   height: 100vh;
    position:  fixed;
    width: 100vw;
    z-index:  100;
    top: 0;
    left: 0;
    background: url('https://pbs.twimg.com/profile_banners/2795845802/1533686884/1500x500');
    height:  100vh;
        animation: 10s linear infinite slowboi;
    }

.csvg-background {display: none;}

    @keyframes lit {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .csvg-digit {
        animation: 1s linear infinite lit;
    }
    .wrapper {
    filter: url(#wreckit);
}

@keyframes wobz {
0%, 50%, 100% {
transform: rotate(0deg);
}

25% {
transform: rotate(-15deg);
}
75% {
transform: rotate(15deg);
}
}
#navMenu li {
animation: 0.15s linear infinite wobz;
}
</style>`;
