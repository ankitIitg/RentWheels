const passport=require('passport');
const facebookStrategy=require('passport-facebook').Strategy;
const User=require('../models/user');
const keys=require('../config/keys');

passport.serializeUser((user,done)=>{
    done(null,user);
});

passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        done(err,user);
    });
});

passport.use(new facebookStrategy({
    clientID: '1369676290210234',
    clientSecret: '83c6fc5316b0b1418216dfc64efeb039',
    callbackURL: 'https://localhost:3000/auth/facebook/callback',
    passReqToCallback : true,
    profileFields: ['email','name']
},
function(accessToken,refreshToken,profile,done){               
        console.log(profile)
}));
