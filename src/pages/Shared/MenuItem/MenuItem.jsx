

const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="flex justify-center space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px] h-[80px]" src={image} alt="" />
            <div>
                <h3 className="uppercase font-medium text-lg">{name}-----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;