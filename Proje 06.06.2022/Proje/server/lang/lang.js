const langue = {
    "en": {
        "error": {
            "username": {
                "required": "Username is required",
                "min": "Username must be at least 3 characters",
                "max": "Username must be less than 15 characters",
                "unique": "Username is already taken",
                "invalid": "Username is invalid",
                "format": "Username must be alphanumeric"
            },
            "password": {
                "required": "Password is required",
                "min": "Password must be at least 4 characters",
                "max": "Password must be less than 15 characters"
            },
            "email": {
                "isEmail": "Email is invalid",
                "isString": "Email must be a string",
                "isShort": "Email must be at least 8 characters",
                "isLong": "Email must be less than 50 characters",
            },
            "phone": {
                "isShort": "Phone number is too short",
                "isLong": "Phone number is too long",
                "isNan": "Phone must be a number"
            },
            "expairs": {
                "required": "Expairs is required",
                "min": "Expairs must be at least 30 days",
                "max": "Expairs must be less than 365 days",
                "isNan": "Expairs must be a number"
            },
            "admin": {
                "required": "Admin id is required",
                "isEmpty": "Admin id is empty"

            }
        }
    },
    "tr": {
        "error": {
            "username": {
                "required": "Kullanıcı adı boş olamaz",
                "min": "Kullanıcı adı en az 3 karakter olmalı",
                "max": "Kullanıcı adı en fazla 15 karakter olmalı",
                "unique": "Kullanıcı adı zaten alınmış",
                "invalid": "Kullanıcı adı geçersiz",
                "format": "Kullanıcı adı alfanumerik olmalı"
            },
            "password": {
                "required": "Şifre Boş Geçilemez",
                "min": "Şifre en az 4 karakter olmalı",
                "max": "Şifre en fazla 15 karakter olmalı",
            },
            "email": {
                "isEmail": "Email geçersiz",
                "isString": "Email içinde geçersiz karakter kullanılamaz",
                "isShort": "Email en az 8 karakter olmalı",
                "isLong": "Email en fazla 50 karakter olmalı",
            },
            "phone": {
                "isShort": "Telefon numarası çok kısa",
                "isLong": "Telefon numarası çok uzun",
                "isNan": "Telefon numarası sayı olmalı"
            },
            "expairs": {
                "required": "Süre gerekli",
                "min": "Süre en az 30 gün olmalı",
                "max": "Süre en fazla 365 gün olmalı",
                "isNan": "Süre numarası sayı olmalı"
            },
            "admin": {
                "required": "Admin id zorunlu alandır",
                "isEmpty": "Admin id boş olamaz!"
            }
        }
    }
}

export { langue };