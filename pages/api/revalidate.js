const revalidate = async (req, res) => {
    try{
        await res.unstable_revalidate('/get-posts');
        const revalidated = true;
        res.status(200).json({revalidated});
    }catch(err){
        console.log(err);
    }
}

export default revalidate;