
enum WarningState {
    AllOk,
    NotSoMuch,
    Danger,
}

const warningStateTransitions = {
    [WarningState.AllOk]: [WarningState.NotSoMuch, WarningState.Danger],
    [WarningState.NotSoMuch]: [WarningState.AllOk, WarningState.Danger],
    [WarningState.Danger]: [WarningState.NotSoMuch],
};

type State = number | string;
type Transitions = {
    [FromState in State]: State[];
};

class Machine<S extends State, T extends Transitions> {
    state: FS;
    transitions: T;

    constructor(initState: S, transitions: T) {
        this.state = initState;
        this.transitions = transitions;
    }
}

const warningMachine = new Machine<WarningState, typeof warningStateTransitions>(WarningState.AllOk, warningStateTransitions);

const warningMachineInfer = new Machine<WarningState>(WarningState.AllOk, warningStateTransitions);
