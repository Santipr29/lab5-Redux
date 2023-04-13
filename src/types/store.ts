import { Character } from "./character"
export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    people: Character[]
}

export enum StarActions {
    "GET" = "GET",
}

export interface GetStarAction {
    action: StarActions.GET,
    payload: Character[]
}

export type Actions = GetStarAction;