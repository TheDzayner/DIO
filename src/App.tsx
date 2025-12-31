import React, { useState } from 'react';
import Header from './components/Header';
import ProductsEmptyState from './components/ProductsEmptyState';
import AddProductModal from './components/AddProductModal';
import ProductList from './components/ProductList';
import ProductDetailsPage from './components/ProductDetailsPage';
import HeatmapPage from './components/HeatmapPage';
import ServicesPage from './components/ServicesPage';
import UserBehaviorPage from './components/UserBehaviorPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import OTPVerificationPage from './components/OTPVerificationPage';

interface Product {
  id: string;
  name: string;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authView, setAuthView] = useState<'login' | 'signup' | 'otp'>('login');
  const [email, setEmail] = useState('');
  const [activeTab, setActiveTab] = useState<'products' | 'dashboard'>('products');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [showUserBehavior, setShowUserBehavior] = useState(false);

  const handleAddProduct = (name: string) => {
    const newProduct = {
      id: Date.now().toString(),
      name: name,
    };
    setProducts([...products, newProduct]);
    setIsAddModalOpen(false);
  };

  const selectedProduct = products.find(p => p.id === selectedProductId);

  if (!isLoggedIn) {
    if (authView === 'signup') {
      return (
        <SignUpPage 
          onLogin={() => setAuthView('login')} 
          onContinue={(email) => {
            setEmail(email);
            setAuthView('otp');
          }}
        />
      );
    }
    if (authView === 'otp') {
      return (
        <OTPVerificationPage 
          email={email}
          onBack={() => setAuthView('signup')}
          onContinue={() => {
            // Here we would validate the OTP
            // For now, let's just log the user in
            setIsLoggedIn(true);
          }}
        />
      );
    }
    return (
      <LoginPage 
        onLogin={() => setIsLoggedIn(true)} 
        onSignUp={() => setAuthView('signup')} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-bg-page">
      <Header 
        user={{ 
          name: "نام و نام خانوادگی",
        }}
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setSelectedProductId(null);
          setShowHeatmap(false);
          setShowUserBehavior(false);
        }}
      />
      
      <main className="p-8 min-h-[calc(100vh-130px)]">
        <div className="max-w-[1440px] mx-auto h-full">
          {showHeatmap ? (
            <HeatmapPage onBack={() => setShowHeatmap(false)} />
          ) : showUserBehavior ? (
            <UserBehaviorPage 
              onBack={() => setShowUserBehavior(false)} 
              productName={selectedProduct?.name}
            />
          ) : activeTab === 'dashboard' ? (
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold text-text-primary font-sans">
                داشبورد
              </h1>
              <p className="text-text-tertiary font-sans">
                محتوای داشبورد اینجا قرار می‌گیرد.
              </p>
            </div>
          ) : selectedProductId && selectedProduct ? (
            <ServicesPage 
              productName={selectedProduct.name}
              onBack={() => setSelectedProductId(null)}
              onSettings={() => console.log('Settings clicked')}
              onHeatmapClick={() => setShowHeatmap(true)}
              onUserBehaviorClick={() => setShowUserBehavior(true)}
            />
          ) : (
            <>
              {products.length === 0 ? (
                <ProductsEmptyState 
                  onAddProduct={() => setIsAddModalOpen(true)}
                />
              ) : (
                <ProductList 
                  products={products}
                  onAddProduct={() => setIsAddModalOpen(true)}
                  onProductClick={(product) => setSelectedProductId(product.id)}
                />
              )}
              
              <AddProductModal 
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onAdd={handleAddProduct}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
