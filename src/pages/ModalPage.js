import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };
    const actionBar = <div><Button primary onClick={handleClose}>I Accept</Button></div>;
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here's an important agreement for you to accept
        </p>
    </Modal>

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
            <h2 className='text-lg font-bold'>Here are some points:</h2>
            <ul className='list-disc list-inside'>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur sodales leo, sit amet efficitur ex interdum ac. In dapibus eros eu augue imperdiet aliquam. Aliquam sed felis magna. Aliquam libero purus, condimentum in nibh ac, lacinia volutpat quam. Praesent enim quam, tincidunt at pharetra sed, efficitur a magna. Fusce velit ante, accumsan consequat euismod nec, feugiat id magna. Pellentesque congue malesuada facilisis. Praesent blandit leo eu risus tempor blandit et at arcu. Fusce eu pretium arcu. Vivamus consectetur nibh erat. Mauris tincidunt, nisi sit amet imperdiet posuere, tellus diam egestas leo, vel fermentum nibh urna in purus. Proin at interdum metus. Ut finibus, sapien ac porttitor consectetur, felis nisi sagittis leo, et feugiat eros odio a nisl.

                    Fusce id sapien at ligula ullamcorper tempor. Phasellus sem libero, luctus vel purus vitae, vulputate laoreet tortor. Duis vitae consequat massa, ut viverra elit. Duis egestas vehicula magna. Nulla facilisi. Donec lobortis fermentum est ut eleifend. Suspendisse ut lectus ut quam hendrerit blandit. Suspendisse a mi finibus, feugiat elit vel, tempor purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque hendrerit nisl vitae urna suscipit, ac mattis nisi venenatis. Pellentesque euismod purus eu ex gravida faucibus. Integer sed molestie quam, a scelerisque felis. Phasellus elementum, tellus sed dignissim maximus, augue ipsum sagittis leo, vel tristique velit dolor a lorem. Vivamus vestibulum augue tortor. Ut sit amet quam nec neque molestie tristique a eget justo.
                </li>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur sodales leo, sit amet efficitur ex interdum ac. In dapibus eros eu augue imperdiet aliquam. Aliquam sed felis magna. Aliquam libero purus, condimentum in nibh ac, lacinia volutpat quam. Praesent enim quam, tincidunt at pharetra sed, efficitur a magna. Fusce velit ante, accumsan consequat euismod nec, feugiat id magna. Pellentesque congue malesuada facilisis. Praesent blandit leo eu risus tempor blandit et at arcu. Fusce eu pretium arcu. Vivamus consectetur nibh erat. Mauris tincidunt, nisi sit amet imperdiet posuere, tellus diam egestas leo, vel fermentum nibh urna in purus. Proin at interdum metus. Ut finibus, sapien ac porttitor consectetur, felis nisi sagittis leo, et feugiat eros odio a nisl.

                    Fusce id sapien at ligula ullamcorper tempor. Phasellus sem libero, luctus vel purus vitae, vulputate laoreet tortor. Duis vitae consequat massa, ut viverra elit. Duis egestas vehicula magna. Nulla facilisi. Donec lobortis fermentum est ut eleifend. Suspendisse ut lectus ut quam hendrerit blandit. Suspendisse a mi finibus, feugiat elit vel, tempor purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque hendrerit nisl vitae urna suscipit, ac mattis nisi venenatis. Pellentesque euismod purus eu ex gravida faucibus. Integer sed molestie quam, a scelerisque felis. Phasellus elementum, tellus sed dignissim maximus, augue ipsum sagittis leo, vel tristique velit dolor a lorem. Vivamus vestibulum augue tortor. Ut sit amet quam nec neque molestie tristique a eget justo.
                </li>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur sodales leo, sit amet efficitur ex interdum ac. In dapibus eros eu augue imperdiet aliquam. Aliquam sed felis magna. Aliquam libero purus, condimentum in nibh ac, lacinia volutpat quam. Praesent enim quam, tincidunt at pharetra sed, efficitur a magna. Fusce velit ante, accumsan consequat euismod nec, feugiat id magna. Pellentesque congue malesuada facilisis. Praesent blandit leo eu risus tempor blandit et at arcu. Fusce eu pretium arcu. Vivamus consectetur nibh erat. Mauris tincidunt, nisi sit amet imperdiet posuere, tellus diam egestas leo, vel fermentum nibh urna in purus. Proin at interdum metus. Ut finibus, sapien ac porttitor consectetur, felis nisi sagittis leo, et feugiat eros odio a nisl.

                    Fusce id sapien at ligula ullamcorper tempor. Phasellus sem libero, luctus vel purus vitae, vulputate laoreet tortor. Duis vitae consequat massa, ut viverra elit. Duis egestas vehicula magna. Nulla facilisi. Donec lobortis fermentum est ut eleifend. Suspendisse ut lectus ut quam hendrerit blandit. Suspendisse a mi finibus, feugiat elit vel, tempor purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque hendrerit nisl vitae urna suscipit, ac mattis nisi venenatis. Pellentesque euismod purus eu ex gravida faucibus. Integer sed molestie quam, a scelerisque felis. Phasellus elementum, tellus sed dignissim maximus, augue ipsum sagittis leo, vel tristique velit dolor a lorem. Vivamus vestibulum augue tortor. Ut sit amet quam nec neque molestie tristique a eget justo.
                </li>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur sodales leo, sit amet efficitur ex interdum ac. In dapibus eros eu augue imperdiet aliquam. Aliquam sed felis magna. Aliquam libero purus, condimentum in nibh ac, lacinia volutpat quam. Praesent enim quam, tincidunt at pharetra sed, efficitur a magna. Fusce velit ante, accumsan consequat euismod nec, feugiat id magna. Pellentesque congue malesuada facilisis. Praesent blandit leo eu risus tempor blandit et at arcu. Fusce eu pretium arcu. Vivamus consectetur nibh erat. Mauris tincidunt, nisi sit amet imperdiet posuere, tellus diam egestas leo, vel fermentum nibh urna in purus. Proin at interdum metus. Ut finibus, sapien ac porttitor consectetur, felis nisi sagittis leo, et feugiat eros odio a nisl.

                    Fusce id sapien at ligula ullamcorper tempor. Phasellus sem libero, luctus vel purus vitae, vulputate laoreet tortor. Duis vitae consequat massa, ut viverra elit. Duis egestas vehicula magna. Nulla facilisi. Donec lobortis fermentum est ut eleifend. Suspendisse ut lectus ut quam hendrerit blandit. Suspendisse a mi finibus, feugiat elit vel, tempor purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque hendrerit nisl vitae urna suscipit, ac mattis nisi venenatis. Pellentesque euismod purus eu ex gravida faucibus. Integer sed molestie quam, a scelerisque felis. Phasellus elementum, tellus sed dignissim maximus, augue ipsum sagittis leo, vel tristique velit dolor a lorem. Vivamus vestibulum augue tortor. Ut sit amet quam nec neque molestie tristique a eget justo.
                </li>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur sodales leo, sit amet efficitur ex interdum ac. In dapibus eros eu augue imperdiet aliquam. Aliquam sed felis magna. Aliquam libero purus, condimentum in nibh ac, lacinia volutpat quam. Praesent enim quam, tincidunt at pharetra sed, efficitur a magna. Fusce velit ante, accumsan consequat euismod nec, feugiat id magna. Pellentesque congue malesuada facilisis. Praesent blandit leo eu risus tempor blandit et at arcu. Fusce eu pretium arcu. Vivamus consectetur nibh erat. Mauris tincidunt, nisi sit amet imperdiet posuere, tellus diam egestas leo, vel fermentum nibh urna in purus. Proin at interdum metus. Ut finibus, sapien ac porttitor consectetur, felis nisi sagittis leo, et feugiat eros odio a nisl.

                    Fusce id sapien at ligula ullamcorper tempor. Phasellus sem libero, luctus vel purus vitae, vulputate laoreet tortor. Duis vitae consequat massa, ut viverra elit. Duis egestas vehicula magna. Nulla facilisi. Donec lobortis fermentum est ut eleifend. Suspendisse ut lectus ut quam hendrerit blandit. Suspendisse a mi finibus, feugiat elit vel, tempor purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque hendrerit nisl vitae urna suscipit, ac mattis nisi venenatis. Pellentesque euismod purus eu ex gravida faucibus. Integer sed molestie quam, a scelerisque felis. Phasellus elementum, tellus sed dignissim maximus, augue ipsum sagittis leo, vel tristique velit dolor a lorem. Vivamus vestibulum augue tortor. Ut sit amet quam nec neque molestie tristique a eget justo.
                </li>
            </ul>
        </div>
    )

}

export default ModalPage;