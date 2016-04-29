import {AbstractNotationInstruction} from "./AbstractNotationInstruction";
import {Fraction} from "../../../Common/DataObjects/fraction";

export class RhythmInstruction extends AbstractNotationInstruction {
    constructor(rhythm: Fraction, numerator: number, denominator: number, rhythmSymbolEnum: RhythmSymbolEnum) {
        super(undefined); // FIXME no parent SourceStaffEntry
        this.rhythm = rhythm;
        this.numerator = numerator;
        this.denominator = denominator;
        this.symbolEnum = rhythmSymbolEnum;
    }
    private numerator: number;
    private denominator: number;
    private rhythm: Fraction;
    private symbolEnum: RhythmSymbolEnum;

    public get Rhythm(): Fraction {
        return this.rhythm;
    }
    public set Rhythm(value: Fraction) {
        this.rhythm = value;
    }
    public get SymbolEnum(): RhythmSymbolEnum {
        return this.symbolEnum;
    }
    public set SymbolEnum(value: RhythmSymbolEnum) {
        this.symbolEnum = value;
    }
    public clone(): RhythmInstruction {
        return new RhythmInstruction(this.rhythm.clone(), this.numerator, this.denominator, this.symbolEnum);
    }
    public OperatorEquals(rhythm2: RhythmInstruction): boolean {
        let rhythm1: RhythmInstruction = this;
        if (rhythm1 === rhythm2) {
            return true;
        }
        if ((<Object>rhythm1 === undefined) || (<Object>rhythm2 === undefined)) {
            return false;
        }
        return (rhythm1.numerator === rhythm2.numerator && rhythm1.denominator === rhythm2.denominator);
    }

    public OperatorNotEqual(rhythm2: RhythmInstruction): boolean {
        let rhythm1: RhythmInstruction = this;
        return !(rhythm1 === rhythm2);
    }

    public ToString(): string {
        return "Rhythm: " + this.rhythm.ToString();
    }
}

export enum RhythmSymbolEnum {
    NONE = 0,
    COMMON = 1,
    CUT = 2,
}
