export default function validate(values) {
    let errors = {}

    const required = 'To pole jest wymagane.'

    if (!values.name) {
        errors.name = required
    } else if (!/^[a-zA-Z0-9_ ]{4,25}$/.test(values.name)) {
        errors.name = 'Powinno zawierać między 4 a 25 znaków, bez znaków specjalnych.'
    }

    if (!values.email) {
        errors.email = required
    } else if (!/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/.test(values.email)) {
        errors.email = 'Twój adres e-mail jest nieprawidłowy'
    }

    if (!values.topic) {
        errors.topic = required
    }

    if (!values.message) {
        errors.message = required
    }

    return errors;
}