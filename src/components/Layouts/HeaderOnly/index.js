import { Header } from '~/components/Layouts/components';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
        </div>
    );
}

export default HeaderOnly;
