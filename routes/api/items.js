const express=require('express');
const router=express.Router();

//item model

const Item=require('../../models/Item');

//@route GET api/items
//@desc Get All Items
//@acess public
router.get('/',(req,res)=>{
    Item.find()
    .sort({date:-1})
    .then(items=>res.json(items));
});


//@route POST api/items
//@desc create a post
//@acess public
router.post('/',(req,res)=>{
    console.log(req.body.name+"name");
    const newItem=new Item({
        name:req.body.name
    });
    //console.log(name);
    newItem.save()
    .then(item=>res.json(item))
    .catch(err=>console.log(err+"i m here buddy"))
});

router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id)
    .then(item=>item.remove().then(()=>res.json({success:true})))
    .catch(err=>res.status(404).json({success:false}));
})

module.exports=router