import { GridPosition } from "./GridPosition"

export interface ShopData {
    cost: number
    category: string
    categoryText: string
    gridPosition: GridPosition
    canBeTrashed: boolean
    image: string
    newImage: string
    newImage2: string
    assetPath: string
}