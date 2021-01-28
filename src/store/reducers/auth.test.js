import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    let initialState = {
        token: null,
        userId: null,
        error: null,
        loading: false,
        authRedirectPath: '/'
    };
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should store the token on login', () => {
        expect(reducer(initialState, {
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'some-token',
            userId: 'some-user-id'
        })).toEqual({...initialState, token: 'some-token',
                        userId: 'some-user-id'});
    });
});