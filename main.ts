
enum GameScore {
    Win,
    Draw,
    Lose
}

//% color=190 weight=0 icon="\uf1ec" block="Elo"
namespace elo {
    //% block="change from rating $a vs $b $score|| with coefficient $k"
    //% a.defl=100 b.defl=100
    //% k.defl=20
    //% k.min=10
    //% k.max=40
    //% inlineInputMode=inline
    //% blockId=elo_calculate
    //% blockSetVariable=change
    export function calculate(a: number, b: number, score: GameScore, k: number=20): number {
        let realScore: number;
        switch(score) {
            case GameScore.Win:
                realScore = 1;
                break;
            case GameScore.Draw:
                realScore = 0.5;
                break;
            case GameScore.Lose:
                realScore = 0;
                break;
        }

        return Elo.calculate(a, b, realScore, k);
    }
}