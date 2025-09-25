import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    
    const handleLogout = () => {
        navigate('/login')
    }

    return (
        <div className="min-vh-100" style={{background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'}}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#">
                        <i className="bi bi-house-door me-2"></i>
                        Dashboard
                    </a>
                    <button 
                        className="btn btn-outline-light" 
                        onClick={handleLogout}
                    >
                        <i className="bi bi-box-arrow-right me-1"></i>
                        Logout
                    </button>
                </div>
            </nav>
            
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card shadow-lg border-0 rounded-4">
                            <div className="card-body p-5 text-center">
                                <div className="mb-4">
                                    <i className="bi bi-house-heart text-primary" style={{fontSize: '4rem'}}></i>
                                </div>
                                <h1 className="display-4 fw-bold text-primary mb-3">Welcome Home!</h1>
                                <p className="lead text-muted mb-4">
                                    You have successfully logged in to your account. This is your personal dashboard where you can manage your information and access various features.
                                </p>
                                <div className="row g-3">
                                    <div className="col-md-4">
                                        <div className="card border-0 bg-light h-100">
                                            <div className="card-body">
                                                <i className="bi bi-person-circle text-primary mb-2" style={{fontSize: '2rem'}}></i>
                                                <h5 className="card-title">Profile</h5>
                                                <p className="card-text text-muted small">Manage your personal information</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card border-0 bg-light h-100">
                                            <div className="card-body">
                                                <i className="bi bi-gear text-primary mb-2" style={{fontSize: '2rem'}}></i>
                                                <h5 className="card-title">Settings</h5>
                                                <p className="card-text text-muted small">Customize your preferences</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card border-0 bg-light h-100">
                                            <div className="card-body">
                                                <i className="bi bi-shield-check text-primary mb-2" style={{fontSize: '2rem'}}></i>
                                                <h5 className="card-title">Security</h5>
                                                <p className="card-text text-muted small">Update your security settings</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home