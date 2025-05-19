export const Logo = ({ type = 'primary' }) => {
    return (
        <a href="/">
            <img src={`images/logo/${type}.svg`} alt="لوگوی کانسپتو" className="w-40 min-w-40 lg:min-w-44" />
        </a>
    );
};
