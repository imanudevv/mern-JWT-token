import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Dashboard = () => {
    const [suc, setSuc] = useState()
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    
    useEffect(() => {
        axios.get('http://localhost:3001/dashboard')
        .then(res => {
            if(res.data === "Success"){
                setSuc("Success")
            } else {
                navigate('/')
            }
        }).catch(err => console.log(err))
    }, [])

    const handleLogout = () => {
        navigate('/login')
    }

    return (
        <div className="min-vh-100" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#">
                        <i className="bi bi-speedometer2 me-2"></i>
                        Admin Dashboard
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
                    <div className="col-lg-10">
                        <div className="card shadow-lg border-0 rounded-4">
                            <div className="card-body p-5">
                                <div className="text-center mb-5">
                                    <i className="bi bi-shield-check text-success mb-3" style={{fontSize: '4rem'}}></i>
                                    <h1 className="display-4 fw-bold text-dark mb-3">Admin Dashboard</h1>
                                    <p className="lead text-muted">
                                        Welcome to the administrative panel. You have full access to manage the system.
                                    </p>
                                    {suc && (
                                        <div className="alert alert-success border-0 rounded-pill d-inline-block">
                                            <i className="bi bi-check-circle me-2"></i>
                                            {suc}
                                        </div>
                                    )}
                                </div>
                                
                                <div className="row g-4">
                                    <div className="col-md-6 col-lg-3">
                                        <div className="card border-0 bg-primary text-white h-100">
                                            <div className="card-body text-center">
                                                <i className="bi bi-people mb-3" style={{fontSize: '2.5rem'}}></i>
                                                <h5 className="card-title">Users</h5>
                                                <p className="card-text">Manage user accounts</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="card border-0 bg-success text-white h-100">
                                            <div className="card-body text-center">
                                                <i className="bi bi-graph-up mb-3" style={{fontSize: '2.5rem'}}></i>
                                                <h5 className="card-title">Analytics</h5>
                                                <p className="card-text">View system statistics</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="card border-0 bg-warning text-white h-100">
                                            <div className="card-body text-center">
                                                <i className="bi bi-gear mb-3" style={{fontSize: '2.5rem'}}></i>
                                                <h5 className="card-title">Settings</h5>
                                                <p className="card-text">System configuration</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="card border-0 bg-info text-white h-100">
                                            <div className="card-body text-center">
                                                <i className="bi bi-file-earmark-text mb-3" style={{fontSize: '2.5rem'}}></i>
                                                <h5 className="card-title">Reports</h5>
                                                <p className="card-text">Generate reports</p>
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

export default Dashboard