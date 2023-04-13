import traer_api from "../services/characters"
import { GetStarAction, StarActions } from "../types/store"

export const getPeople = async (): Promise<GetStarAction> => {
    const star = await traer_api();
    return {
        action: StarActions.GET,
        payload: star
    }
}