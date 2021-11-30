const usarData = async () => {

    let {
        let rpta = await traerData();
        console.log(rpta);
    } catch (error) {
        console.log(error);
    }
};
usarData();