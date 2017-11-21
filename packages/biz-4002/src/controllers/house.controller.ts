import { get, param } from '@loopback/rest';

enum FirstClassCity {
    Beijing,
    Hangzhou,
    Shanghai,
    Shenzhen,
    Guangzhou
};

export class HouseController {
    // Note that we can still use OperationObject fragments with the
    // route decorators for fine-tuning their definitions and behaviours.
    // This could simply be `@get('/')`, if desired.
    @get('/', {
        responses: {
            '200': {
                description: 'house info',
                schema: { type: 'string' }
            }
        }
    })
    @param.query.string('name')
    location(name: string) {
        let city;
        if (name) {
            const length = name.length;
            city = FirstClassCity[length];
        }

        if (city) {
            return `${city}`;
        } else {
            throw Error('Oops, no such city.');
        }
    }
}
