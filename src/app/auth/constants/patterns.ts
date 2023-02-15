export enum PASSWORD_PATTERNS {
    LOWER_CASE = '(.*[a-z].*)',
    UPPER_CASE = '(.*[A-Z].*)',
    DIGITS = '(.*\\d.*)',
    SPECIAL_CHARS = '[`.*\\W.*]'
}

export enum PASSWORD_FORMAT {
    PATTERN = '^(?=.*[A-Z])(?=.*[a-z])(?=.*[\\d])(?=.*[\\W\]).{12,}$'
}