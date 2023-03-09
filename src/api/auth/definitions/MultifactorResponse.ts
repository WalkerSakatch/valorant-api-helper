export interface MultifactorResponse {
    multiFactorCodeLength: number
    method: string
    methods: Array<string>
    mfaVersion: string
    email: string
}