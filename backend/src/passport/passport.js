import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User.js';
import { GOOGLE_AUTH_CLIENT_ID, GOOGLE_AUTH_CLIENT_SECRET, GOOGLE_AUTH_REDIRECT_URL } from '../config.js';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_AUTH_CLIENT_ID,
    clientSecret: GOOGLE_AUTH_CLIENT_SECRET,
    callbackURL: 'http://localhost:8000/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
            user = await User.create({
                email: profile.emails[0].value,
                username: profile.displayName,
                googleId: profile.id,
                profilePicture: profile.photos[0].value,
            });
        }
        return done(null, user);
    } catch (error) {
        return done(error, null);
    }
}));

export default passport;