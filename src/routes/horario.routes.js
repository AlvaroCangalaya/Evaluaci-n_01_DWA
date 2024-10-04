import { Router} from "express"

const router = Router ();

router.get('/list', async(req, res)=>{
    try{
        res.render('horario/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/add', (req,res)=>{
    res.render('horario/add');
});

router.post('/add', async(req, res)=>{
    try{
        res.redirect('/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/edit', (req,res)=>{
    res.render('horario/edit');
});

router.post('/edit', async(req, res)=>{
    try{
        res.redirect('/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});



export default router;