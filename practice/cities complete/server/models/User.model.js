const mongoose=require('mongoose')
const bcrypt=require('bcrypt');

const UserSchema=new mongoose.Schema({
    firstName:{
        type: String,
        minlength:[
            2, "Please enter name longer than 2"
        ]
    },
    lastName:{
        type: String,
        minlength:[
            2, "Please enter name longer than 2"
        ]
    },
    email:{
        type: String,
        unique:true,
        validate:[
            val=> /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val), "Please enter a valid email"
        ]
    },
    password:{
        type:String,
        minlength:[
            8,
            'Please enter password longer than 8'
        ]
    }
},{timestamps:true});

UserSchema.virtual('passwordConfirmation',{//virtual creates a field thats not stored in db
    get:()=>this._passwordConfirmation,//gets info from the creation form, req.body. _ before a name is something we dont touch directly, private
    set:val=>this._passwordConfirmation=val
});

//validate before saving something, pre is run before regular mongoose validation
//next runs if everything checks out ok, right before regular validations
UserSchema.pre('validate', function(next){
if(this.password!==this.passwordConfirmation){
    this.invalidate('passwordConfirmation', "Please make sure passwords match!");
}
next();//this runs if above is false
});
UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)//higher number=more secure, more work for comp
    .then(hashedPw=>{
        this.password=hashedPw;
        next();//must be inside success cb to call only once its been hashed fully
    });
});

module.exports=mongoose.model('User',UserSchema);