import './authorisation-form.scss';


function AuthorisationForm() {
    return (
        <div className='form'>
            <p className="header"></p>
            <div className="logo">
                <svg width="83" height="73" viewBox="0 0 83 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_210_108)">
                        <rect width="75" height="65" rx="10" fill="url(#paint0_linear_210_108)" />
                    </g>
                    <path d="M33 7H12L27 23L12 39H33" stroke="white" stroke-width="3" />
                    <path d="M41 7H62L41 39H65M44 23H59" stroke="white" stroke-width="3" />
                    <path
                        d="M15.1855 53.7617C15.1855 53.4297 15.0684 53.1758 14.834 53C14.5996 52.8203 14.1777 52.6328 13.5684 52.4375C12.959 52.2383 12.4766 52.043 12.1211 51.8516C11.1523 51.3281 10.668 50.623 10.668 49.7363C10.668 49.2754 10.7969 48.8652 11.0547 48.5059C11.3164 48.1426 11.6895 47.8594 12.1738 47.6562C12.6621 47.4531 13.209 47.3516 13.8145 47.3516C14.4238 47.3516 14.9668 47.4629 15.4434 47.6855C15.9199 47.9043 16.2891 48.2148 16.5508 48.6172C16.8164 49.0195 16.9492 49.4766 16.9492 49.9883H15.1914C15.1914 49.5977 15.0684 49.2949 14.8223 49.0801C14.5762 48.8613 14.2305 48.752 13.7852 48.752C13.3555 48.752 13.0215 48.8438 12.7832 49.0273C12.5449 49.207 12.4258 49.4453 12.4258 49.7422C12.4258 50.0195 12.5645 50.252 12.8418 50.4395C13.123 50.627 13.5352 50.8027 14.0781 50.9668C15.0781 51.2676 15.8066 51.6406 16.2637 52.0859C16.7207 52.5312 16.9492 53.0859 16.9492 53.75C16.9492 54.4883 16.6699 55.0684 16.1113 55.4902C15.5527 55.9082 14.8008 56.1172 13.8555 56.1172C13.1992 56.1172 12.6016 55.998 12.0625 55.7598C11.5234 55.5176 11.1113 55.1875 10.8262 54.7695C10.5449 54.3516 10.4043 53.8672 10.4043 53.3164H12.168C12.168 54.2578 12.7305 54.7285 13.8555 54.7285C14.2734 54.7285 14.5996 54.6445 14.834 54.4766C15.0684 54.3047 15.1855 54.0664 15.1855 53.7617ZM24.2223 52.9941V56H22.4645V47.4688H25.7927C26.4333 47.4688 26.9958 47.5859 27.4802 47.8203C27.9684 48.0547 28.3434 48.3887 28.6052 48.8223C28.8669 49.252 28.9977 49.7422 28.9977 50.293C28.9977 51.1289 28.7106 51.7891 28.1364 52.2734C27.5661 52.7539 26.7751 52.9941 25.7634 52.9941H24.2223ZM24.2223 51.5703H25.7927C26.2575 51.5703 26.611 51.4609 26.8532 51.2422C27.0993 51.0234 27.2223 50.7109 27.2223 50.3047C27.2223 49.8867 27.0993 49.5488 26.8532 49.291C26.6071 49.0332 26.2673 48.9004 25.8337 48.8926H24.2223V51.5703ZM39.6634 52.3027H36.2884V54.5879H40.2494V56H34.5306V47.4688H40.2377V48.8926H36.2884V50.9258H39.6634V52.3027ZM50.417 54.2422H47.335L46.7491 56H44.8799L48.0557 47.4688H49.6846L52.878 56H51.0088L50.417 54.2422ZM47.8096 52.8184H49.9424L48.8702 49.625L47.8096 52.8184ZM60.6667 52.5781L59.7527 53.5625V56H57.9948V47.4688H59.7527V51.3359L60.5261 50.2754L62.6999 47.4688H64.862L61.8327 51.2598L64.9499 56H62.8581L60.6667 52.5781Z"
                        fill="white" />
                    <defs>
                        <filter id="filter0_d_210_108" x="0" y="0" width="83" height="73" filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha" />
                            <feOffset dx="4" dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_210_108" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_210_108" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_210_108" x1="5" y1="3" x2="72" y2="61" gradientUnits="userSpaceOnUse">
                            <stop offset="0.239583" stop-color="#5481C5" />
                            <stop offset="0.661458" stop-color="#7A5A9A" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="slider">
                <div className="slider__sign-up">Sign up</div>
                <div className="slider__sign-in"> Sign in</div>
            </div>
            <div className="sign-up">
                <div className="username">
                    <input type="text" placeholder="" className="username__input" />
                </div>
                <div className="password">
                    <input type="text" placeholder="" className="password__input" />
                </div>
                <div className="remember-me">
                    <input type="checkbox" className='' />
                    <p>Remeber me</p>
                </div>
            </div>
            <div className="action">
                <button className="">
                    <a href="" className="action__link">Let's talking!</a>
                </button>
            </div>
            <div className="">
                <p className="">Forgot password?</p>
            </div>
        </div>
        
       
    )
}

export default AuthorisationForm;