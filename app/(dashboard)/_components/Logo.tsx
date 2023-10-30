import Image from 'next/image';

const Logo = () => {
    return (
        <Image src="/logo.svg" alt="Logo" width={110} height={110} />
    );
};

export default Logo;
