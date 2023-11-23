
namespace elo {
    enum GameScore {
        Win = 1,
        Draw = 0.5,
        Lose = 0
    }
    
    //% block="game of rating $a vs $b result $score|| with coefficient $k"
    function calculate(a: number, b: number, score: GameScore, k: number=20): number {
        return Elo.calculate(a, b, score, k);
    }
}