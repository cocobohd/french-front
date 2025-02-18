interface Tokens {
    accessToken: string
    refreshToken: string
}

export const setTokentToLocalStorage = (tokens: Tokens) => {
    if (tokens.accessToken)
        localStorage.setItem('accessToken', JSON.stringify(tokens.accessToken))
    if (tokens.refreshToken)
        localStorage.setItem(
            'refreshToken',
            JSON.stringify(tokens.refreshToken)
        )

    return null
}
