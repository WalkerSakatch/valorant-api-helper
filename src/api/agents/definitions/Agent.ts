import { VoiceLine } from "./VoiceLine"
import { Ability } from "./Ability"
import { Role } from "./Role"

export interface Agent {
    uuid: string
    displayName: string
    description: string
    developerName: string
    characterTags: Array<string>
    displayIcon: string
    displayIconSmall: string
    bustPortrait: string
    fullPortrait: string
    fullPortraitV2: string
    killfeedPortrait: string
    background: string
    backgroundGradientColors: Array<string>
    assetPath: string
    isFullPortraitRightFacing: boolean
    isPlayableCharacter: boolean
    isAvailableForTest: boolean
    isBaseContent: boolean
    role: Role
    abilities: Array<Ability>
    voiceLine: VoiceLine
}