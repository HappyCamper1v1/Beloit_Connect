import { SignInButton, SignOutButton } from '@/components/buttons'

export default function Header() {
    return (
        <div className="header">
            <div className="app-name">Beloit Connect</div>
            <div className='sign-btn-right'>
                <SignOutButton/>
                <SignInButton/>
            </div>
        </div>
    )
}
