import { Publish } from '@material-ui/icons';
import AirPods from '../../images/airpods.jpg'
import './newProduct.css';

export function NewProduct() {
    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Product</h1>
            <form className="addProductForm">
                <div className="addProductItemRight">
                    <div className="addProductItem">
                        <label>Name</label>
                        <input type="text" placeholder="Apple Airpods" />
                    </div>
                    <div className="addProductItem">
                        <label>Stock</label>
                        <input type="text" placeholder="123" />
                    </div>
                    <div className="addProductItem">
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>

                <div className="addProductItemLeft">
                    <label htmlFor="file" className="addProductImage">
                        <img
                            src={AirPods}
                            alt="Product Image"
                            className="productImage"
                        />
                        <Publish className='productImagePublish'/>
                    </label>
                    <input type="file" id="file" style={{ display: 'none' }} />
                    <button className="addProductButton">Create</button>
                </div>
            </form>
        </div>
    );
}
