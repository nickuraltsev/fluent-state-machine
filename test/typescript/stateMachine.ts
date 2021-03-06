import Finity, { StateMachine } from '../../';

enum State { S1, S2 }
enum Event { E1, E2 }

const stateMachine: StateMachine<State, Event> =
  Finity
    .configure<State, Event>()
      .initialState(State.S1)
        .on(Event.E1).transitionTo(State.S2)
      .state(State.S2)
        .on(Event.E2).transitionTo(State.S1)
    .start();

stateMachine
  .handle(Event.E1)
  .handle(Event.E2, { foo: 'bar' });

const canHandle1: boolean = stateMachine.canHandle(Event.E1);
const canHandle2: boolean = stateMachine.canHandle(Event.E2, { foo: 'bar' });

const currentState: State = stateMachine.getCurrentState();
