const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const PizzaSchema = new Schema({
  pizzaName: {
    type: String
  },
  createdBy: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal)  
  },
  size: {
    type: String,
    default: 'Large'
}, 
toppings: [],

comments: [
  { 
    type: Schema.Types.ObjectId,
    ref:'Comment'
  
  }
]
},
{
  toJSON:{
    virtual:true,
  },
  id:false
}
);

//get total count of comments and replies on retrieval

const Pizza = model('Pizza', PizzaSchema);

PizzaSchema.virtual('commentCount').get(function() {
  return this.comments.reduce((total, comment) => total + comment.replies.length + 1, 0);
});

module.exports = Pizza;
