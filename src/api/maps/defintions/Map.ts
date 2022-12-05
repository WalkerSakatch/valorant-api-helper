import { Callout } from "./Callout"

export interface Map {
    uuid: string
    displayName: string
    coordinates: string
    displayIcon: string
    listViewIcon: string
    splash: string
    assetPath: string
    mapUrl: string
    xMultiplier: number
    yMultiplier: number
    xScalarToAdd: number
    yScalarToAdd: number
    callout: Callout[]
}