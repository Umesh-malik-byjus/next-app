const revalidate = async (req, res) => {
    try{
        await res.unstable_revalidate('/isr-test');
        res.status(200).json({revalidated: true});
    }catch(err){
        console.log(err);
    }
}

export default revalidate;