
enum GameScore {
    Win = 1,
    Draw = 0.5,
    Lose = 0
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
        return Elo.calculate(a, b, score, k);
    }
}