import type { IFile } from "../interfaces";
import { v4 as uuid } from "uuid";

export const fileTree: IFile = {
  id: uuid(),
  name: "my-react-app",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: ".package-lock.json",
          isFolder: false,
          content: `{\n  "name": "my-react-app",\n  "lockfileVersion": 3,\n  "requires": true\n}`,
        },
      ],
    },
    {
      id: uuid(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "favicon.ico",
          isFolder: false,
          content: `<!-- Binary file -->`,
        },
        {
          id: uuid(),
          name: "index.html",
          isFolder: false,
          content: `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" type="image/svg+xml" href="/vite.svg" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>My React App</title>\n  </head>\n  <body>\n    <div id="root"></div>\n    <script type="module" src="/src/main.tsx"></script>\n  </body>\n</html>`,
        },
        {
          id: uuid(),
          name: "robots.txt",
          isFolder: false,
          content: `User-agent: *\nAllow: /`,
        },
        {
          id: uuid(),
          name: "vite.svg",
          isFolder: false,
          content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 410 404">\n  <path d="M400 .5l-200 400L0 .5h400z" fill="#646cff"/>\n</svg>`,
        },
      ],
    },
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "assets",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "images",
              isFolder: true,
              children: [
                {
                  id: uuid(),
                  name: "logo.svg",
                  isFolder: false,
                  content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\n  <circle cx="50" cy="50" r="45" fill="#61dafb" />\n  <text x="50" y="55" text-anchor="middle" fill="#282c34" font-size="24">R</text>\n</svg>`,
                },
                {
                  id: uuid(),
                  name: "hero-bg.svg",
                  isFolder: false,
                  content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">\n  <path fill="#0099ff" fill-opacity="0.3" d="M0,96L120,112C240,128,480,160,720,154.7C960,149,1200,107,1320,85.3L1440,64L1440,320L0,320Z"></path>\n</svg>`,
                },
              ],
            },
            {
              id: uuid(),
              name: "styles",
              isFolder: true,
              children: [
                {
                  id: uuid(),
                  name: "variables.css",
                  isFolder: false,
                  content: `:root {\n  --primary: #646cff;\n  --primary-hover: #535bf2;\n  --bg-dark: #242424;\n  --bg-light: #ffffff;\n  --text-dark: #213547;\n  --text-light: rgba(255, 255, 255, 0.87);\n  --border-radius: 8px;\n  --transition: 0.25s ease;\n  --shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  --font-family: 'Inter', system-ui, -apple-system, sans-serif;\n}`,
                },
                {
                  id: uuid(),
                  name: "globals.css",
                  isFolder: false,
                  content: `@import './variables.css';\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: var(--font-family);\n  color: var(--text-light);\n  background-color: var(--bg-dark);\n  min-height: 100vh;\n  line-height: 1.6;\n  -webkit-font-smoothing: antialiased;\n}\n\na {\n  color: var(--primary);\n  text-decoration: none;\n  transition: color var(--transition);\n}\n\na:hover {\n  color: var(--primary-hover);\n}\n\nimg {\n  max-width: 100%;\n  display: block;\n}`,
                },
              ],
            },
          ],
        },
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "common",
              isFolder: true,
              children: [
                {
                  id: uuid(),
                  name: "Button.tsx",
                  isFolder: false,
                  content: `import React from 'react';\nimport './Button.css';\n\ninterface ButtonProps {\n  children: React.ReactNode;\n  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';\n  size?: 'sm' | 'md' | 'lg';\n  disabled?: boolean;\n  loading?: boolean;\n  onClick?: () => void;\n}\n\nconst Button: React.FC<ButtonProps> = ({\n  children,\n  variant = 'primary',\n  size = 'md',\n  disabled = false,\n  loading = false,\n  onClick,\n}) => {\n  return (\n    <button\n      className={\`btn btn--\${variant} btn--\${size}\`}\n      disabled={disabled || loading}\n      onClick={onClick}\n    >\n      {loading ? <span className="btn__spinner" /> : children}\n    </button>\n  );\n};\n\nexport default Button;`,
                },
                {
                  id: uuid(),
                  name: "Button.css",
                  isFolder: false,
                  content: `.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border: none;\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  font-weight: 600;\n  transition: all var(--transition);\n}\n\n.btn--primary {\n  background: var(--primary);\n  color: #fff;\n}\n\n.btn--primary:hover {\n  background: var(--primary-hover);\n}\n\n.btn--sm { padding: 0.4rem 0.8rem; font-size: 0.85rem; }\n.btn--md { padding: 0.6rem 1.2rem; font-size: 1rem; }\n.btn--lg { padding: 0.8rem 1.6rem; font-size: 1.1rem; }\n\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.btn__spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255 255 255 / 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}`,
                },
                {
                  id: uuid(),
                  name: "Input.tsx",
                  isFolder: false,
                  content: `import React from 'react';\nimport './Input.css';\n\ninterface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {\n  label?: string;\n  error?: string;\n  helperText?: string;\n}\n\nconst Input = React.forwardRef<HTMLInputElement, InputProps>(\n  ({ label, error, helperText, id, ...props }, ref) => {\n    return (\n      <div className="input-group">\n        {label && <label htmlFor={id} className="input-group__label">{label}</label>}\n        <input\n          ref={ref}\n          id={id}\n          className={\`input-group__field \${error ? 'input-group__field--error' : ''}\`}\n          {...props}\n        />\n        {error && <span className="input-group__error">{error}</span>}\n        {helperText && !error && <span className="input-group__helper">{helperText}</span>}\n      </div>\n    );\n  }\n);\n\nInput.displayName = 'Input';\nexport default Input;`,
                },
                {
                  id: uuid(),
                  name: "Input.css",
                  isFolder: false,
                  content: `.input-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n\n.input-group__label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-light);\n}\n\n.input-group__field {\n  padding: 0.6rem 0.75rem;\n  border: 1px solid #3a3a3a;\n  border-radius: var(--border-radius);\n  background: #1a1a1a;\n  color: var(--text-light);\n  font-size: 1rem;\n  transition: border-color var(--transition);\n}\n\n.input-group__field:focus {\n  outline: none;\n  border-color: var(--primary);\n}\n\n.input-group__field--error {\n  border-color: #ef4444;\n}\n\n.input-group__error {\n  font-size: 0.8rem;\n  color: #ef4444;\n}\n\n.input-group__helper {\n  font-size: 0.8rem;\n  color: #888;\n}`,
                },
                {
                  id: uuid(),
                  name: "Modal.tsx",
                  isFolder: false,
                  content: `import React, { useEffect, useCallback } from 'react';\nimport { createPortal } from 'react-dom';\nimport './Modal.css';\n\ninterface ModalProps {\n  isOpen: boolean;\n  onClose: () => void;\n  title?: string;\n  children: React.ReactNode;\n}\n\nconst Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {\n  const handleEscape = useCallback(\n    (e: KeyboardEvent) => {\n      if (e.key === 'Escape') onClose();\n    },\n    [onClose]\n  );\n\n  useEffect(() => {\n    if (isOpen) {\n      document.addEventListener('keydown', handleEscape);\n      document.body.style.overflow = 'hidden';\n    }\n    return () => {\n      document.removeEventListener('keydown', handleEscape);\n      document.body.style.overflow = '';\n    };\n  }, [isOpen, handleEscape]);\n\n  if (!isOpen) return null;\n\n  return createPortal(\n    <div className="modal-overlay" onClick={onClose}>\n      <div className="modal-content" onClick={(e) => e.stopPropagation()}>\n        <div className="modal-header">\n          {title && <h2 className="modal-title">{title}</h2>}\n          <button className="modal-close" onClick={onClose}>×</button>\n        </div>\n        <div className="modal-body">{children}</div>\n      </div>\n    </div>,\n    document.body\n  );\n};\n\nexport default Modal;`,
                },
                {
                  id: uuid(),
                  name: "Modal.css",
                  isFolder: false,
                  content: `.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(4px);\n  display: grid;\n  place-items: center;\n  z-index: 1000;\n  animation: fadeIn 0.2s ease;\n}\n\n.modal-content {\n  background: #1e1e1e;\n  border: 1px solid #333;\n  border-radius: 12px;\n  width: min(90vw, 500px);\n  max-height: 85vh;\n  overflow-y: auto;\n  animation: slideUp 0.3s ease;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid #333;\n}\n\n.modal-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n\n.modal-close {\n  background: none;\n  border: none;\n  color: #888;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.modal-body {\n  padding: 1.25rem;\n}\n\n@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n@keyframes slideUp {\n  from { transform: translateY(20px); opacity: 0; }\n  to { transform: translateY(0); opacity: 1; }\n}`,
                },
                {
                  id: uuid(),
                  name: "Spinner.tsx",
                  isFolder: false,
                  content: `import React from 'react';\nimport './Spinner.css';\n\ninterface SpinnerProps {\n  size?: number;\n  color?: string;\n}\n\nconst Spinner: React.FC<SpinnerProps> = ({ size = 32, color = 'var(--primary)' }) => (\n  <div\n    className="spinner"\n    style={{ width: size, height: size, borderTopColor: color }}\n  />\n);\n\nexport default Spinner;`,
                },
                {
                  id: uuid(),
                  name: "Spinner.css",
                  isFolder: false,
                  content: `.spinner {\n  border: 3px solid rgba(255, 255, 255, 0.1);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}`,
                },
              ],
            },
            {
              id: uuid(),
              name: "layout",
              isFolder: true,
              children: [
                {
                  id: uuid(),
                  name: "Header.tsx",
                  isFolder: false,
                  content: `import React from 'react';\nimport { Link, NavLink } from 'react-router-dom';\nimport './Header.css';\n\nconst navLinks = [\n  { to: '/', label: 'Home' },\n  { to: '/products', label: 'Products' },\n  { to: '/about', label: 'About' },\n  { to: '/contact', label: 'Contact' },\n];\n\nconst Header: React.FC = () => {\n  const [menuOpen, setMenuOpen] = React.useState(false);\n\n  return (\n    <header className="header">\n      <div className="header__container">\n        <Link to="/" className="header__logo">MyApp</Link>\n\n        <button\n          className="header__hamburger"\n          onClick={() => setMenuOpen(!menuOpen)}\n          aria-label="Toggle navigation"\n        >\n          <span />\n          <span />\n          <span />\n        </button>\n\n        <nav className={\`header__nav \${menuOpen ? 'header__nav--open' : ''}\`}>\n          {navLinks.map((link) => (\n            <NavLink\n              key={link.to}\n              to={link.to}\n              className={({ isActive }) =>\n                \`header__link \${isActive ? 'header__link--active' : ''}\`\n              }\n              onClick={() => setMenuOpen(false)}\n            >\n              {link.label}\n            </NavLink>\n          ))}\n        </nav>\n      </div>\n    </header>\n  );\n};\n\nexport default Header;`,
                },
                {
                  id: uuid(),
                  name: "Header.css",
                  isFolder: false,
                  content: `.header {\n  position: sticky;\n  top: 0;\n  background: rgba(30, 30, 30, 0.85);\n  backdrop-filter: blur(12px);\n  border-bottom: 1px solid #2a2a2a;\n  z-index: 100;\n}\n\n.header__container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.header__logo {\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: #fff;\n}\n\n.header__nav {\n  display: flex;\n  gap: 1.5rem;\n}\n\n.header__link {\n  color: #aaa;\n  font-weight: 500;\n  transition: color var(--transition);\n}\n\n.header__link:hover,\n.header__link--active {\n  color: var(--primary);\n}`,
                },
                {
                  id: uuid(),
                  name: "Footer.tsx",
                  isFolder: false,
                  content: `import React from 'react';\nimport './Footer.css';\n\nconst Footer: React.FC = () => (\n  <footer className="footer">\n    <div className="footer__container">\n      <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>\n      <div className="footer__links">\n        <a href="/privacy">Privacy</a>\n        <a href="/terms">Terms</a>\n        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>\n      </div>\n    </div>\n  </footer>\n);\n\nexport default Footer;`,
                },
                {
                  id: uuid(),
                  name: "Footer.css",
                  isFolder: false,
                  content: `.footer {\n  border-top: 1px solid #2a2a2a;\n  padding: 2rem 1.5rem;\n  margin-top: auto;\n}\n\n.footer__container {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #888;\n  font-size: 0.875rem;\n}\n\n.footer__links {\n  display: flex;\n  gap: 1.25rem;\n}\n\n.footer__links a {\n  color: #888;\n  transition: color var(--transition);\n}\n\n.footer__links a:hover {\n  color: var(--primary);\n}`,
                },
                {
                  id: uuid(),
                  name: "Layout.tsx",
                  isFolder: false,
                  content: `import React from 'react';\nimport { Outlet } from 'react-router-dom';\nimport Header from './Header';\nimport Footer from './Footer';\nimport './Layout.css';\n\nconst Layout: React.FC = () => (\n  <div className="layout">\n    <Header />\n    <main className="layout__main">\n      <Outlet />\n    </main>\n    <Footer />\n  </div>\n);\n\nexport default Layout;`,
                },
                {
                  id: uuid(),
                  name: "Layout.css",
                  isFolder: false,
                  content: `.layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.layout__main {\n  flex: 1;\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 2rem 1.5rem;\n}`,
                },
              ],
            },
          ],
        },
        {
          id: uuid(),
          name: "hooks",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "useLocalStorage.ts",
              isFolder: false,
              content: `import { useState, useEffect } from 'react';\n\nexport function useLocalStorage<T>(key: string, initialValue: T) {\n  const [value, setValue] = useState<T>(() => {\n    try {\n      const item = localStorage.getItem(key);\n      return item ? (JSON.parse(item) as T) : initialValue;\n    } catch {\n      return initialValue;\n    }\n  });\n\n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value));\n  }, [key, value]);\n\n  return [value, setValue] as const;\n}`,
            },
            {
              id: uuid(),
              name: "useFetch.ts",
              isFolder: false,
              content: `import { useState, useEffect } from 'react';\n\ninterface FetchState<T> {\n  data: T | null;\n  loading: boolean;\n  error: string | null;\n}\n\nexport function useFetch<T>(url: string): FetchState<T> {\n  const [state, setState] = useState<FetchState<T>>({\n    data: null,\n    loading: true,\n    error: null,\n  });\n\n  useEffect(() => {\n    const controller = new AbortController();\n\n    const fetchData = async () => {\n      try {\n        setState((prev) => ({ ...prev, loading: true, error: null }));\n        const res = await fetch(url, { signal: controller.signal });\n        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);\n        const json = (await res.json()) as T;\n        setState({ data: json, loading: false, error: null });\n      } catch (err: any) {\n        if (err.name !== 'AbortError') {\n          setState({ data: null, loading: false, error: err.message });\n        }\n      }\n    };\n\n    fetchData();\n    return () => controller.abort();\n  }, [url]);\n\n  return state;\n}`,
            },
            {
              id: uuid(),
              name: "useDebounce.ts",
              isFolder: false,
              content: `import { useState, useEffect } from 'react';\n\nexport function useDebounce<T>(value: T, delay = 300): T {\n  const [debounced, setDebounced] = useState(value);\n\n  useEffect(() => {\n    const timer = setTimeout(() => setDebounced(value), delay);\n    return () => clearTimeout(timer);\n  }, [value, delay]);\n\n  return debounced;\n}`,
            },
          ],
        },
        {
          id: uuid(),
          name: "pages",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Home.tsx",
              isFolder: false,
              content: `import React from 'react';\nimport Button from '../components/common/Button';\nimport { useNavigate } from 'react-router-dom';\nimport './Home.css';\n\nconst Home: React.FC = () => {\n  const navigate = useNavigate();\n\n  return (\n    <section className="home">\n      <div className="home__hero">\n        <h1 className="home__title">Build Something Amazing</h1>\n        <p className="home__subtitle">\n          A modern React app with TypeScript, React Router, and a beautiful UI.\n        </p>\n        <div className="home__actions">\n          <Button onClick={() => navigate('/products')}>Browse Products</Button>\n          <Button variant="outline" onClick={() => navigate('/about')}>Learn More</Button>\n        </div>\n      </div>\n    </section>\n  );\n};\n\nexport default Home;`,
            },
            {
              id: uuid(),
              name: "Home.css",
              isFolder: false,
              content: `.home {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n}\n\n.home__hero {\n  text-align: center;\n  max-width: 640px;\n}\n\n.home__title {\n  font-size: 3rem;\n  font-weight: 800;\n  background: linear-gradient(135deg, #646cff, #a855f7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  line-height: 1.1;\n}\n\n.home__subtitle {\n  margin-top: 1rem;\n  font-size: 1.15rem;\n  color: #aaa;\n  line-height: 1.6;\n}\n\n.home__actions {\n  margin-top: 2rem;\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}`,
            },
            {
              id: uuid(),
              name: "Products.tsx",
              isFolder: false,
              content: `import React, { useState } from 'react';\nimport { useFetch } from '../hooks/useFetch';\nimport Spinner from '../components/common/Spinner';\nimport './Products.css';\n\ninterface Product {\n  id: number;\n  title: string;\n  price: number;\n  image: string;\n  category: string;\n}\n\nconst Products: React.FC = () => {\n  const { data, loading, error } = useFetch<Product[]>('https://fakestoreapi.com/products');\n  const [search, setSearch] = useState('');\n\n  const filtered = data?.filter((p) =>\n    p.title.toLowerCase().includes(search.toLowerCase())\n  );\n\n  if (loading) return <div className="products__loading"><Spinner size={48} /></div>;\n  if (error) return <p className="products__error">Error: {error}</p>;\n\n  return (\n    <div className="products">\n      <h1 className="products__heading">Products</h1>\n      <input\n        className="products__search"\n        placeholder="Search products..."\n        value={search}\n        onChange={(e) => setSearch(e.target.value)}\n      />\n      <div className="products__grid">\n        {filtered?.map((product) => (\n          <div key={product.id} className="product-card">\n            <img src={product.image} alt={product.title} className="product-card__img" />\n            <h3 className="product-card__title">{product.title}</h3>\n            <span className="product-card__price">{product.price.toFixed(2)}</span>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};\n\nexport default Products;`,
            },
            {
              id: uuid(),
              name: "Products.css",
              isFolder: false,
              content: `.products__heading {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n\n.products__search {\n  width: 100%;\n  max-width: 400px;\n  padding: 0.65rem 1rem;\n  border-radius: var(--border-radius);\n  border: 1px solid #333;\n  background: #1a1a1a;\n  color: #fff;\n  margin-bottom: 2rem;\n  font-size: 1rem;\n}\n\n.products__grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 1.5rem;\n}\n\n.product-card {\n  background: #1e1e1e;\n  border: 1px solid #2a2a2a;\n  border-radius: 12px;\n  padding: 1.25rem;\n  transition: transform var(--transition), box-shadow var(--transition);\n}\n\n.product-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);\n}\n\n.product-card__img {\n  width: 100%;\n  height: 180px;\n  object-fit: contain;\n  margin-bottom: 1rem;\n}\n\n.product-card__title {\n  font-size: 0.95rem;\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.product-card__price {\n  color: var(--primary);\n  font-weight: 700;\n}\n\n.products__loading {\n  display: grid;\n  place-items: center;\n  min-height: 40vh;\n}\n\n.products__error {\n  color: #ef4444;\n}`,
            },
            {
              id: uuid(),
              name: "About.tsx",
              isFolder: false,
              content: `import React from 'react';\nimport './About.css';\n\nconst About: React.FC = () => (\n  <section className="about">\n    <h1 className="about__title">About Us</h1>\n    <p className="about__text">\n      We are a team of passionate developers building modern web experiences\n      with React and TypeScript. Our mission is to create fast, accessible,\n      and beautiful applications.\n    </p>\n    <div className="about__stats">\n      <div className="about__stat">\n        <span className="about__stat-number">50+</span>\n        <span className="about__stat-label">Projects</span>\n      </div>\n      <div className="about__stat">\n        <span className="about__stat-number">10k+</span>\n        <span className="about__stat-label">Users</span>\n      </div>\n      <div className="about__stat">\n        <span className="about__stat-number">99%</span>\n        <span className="about__stat-label">Uptime</span>\n      </div>\n    </div>\n  </section>\n);\n\nexport default About;`,
            },
            {
              id: uuid(),
              name: "About.css",
              isFolder: false,
              content: `.about {\n  max-width: 700px;\n  margin: 0 auto;\n}\n\n.about__title {\n  font-size: 2.25rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n\n.about__text {\n  color: #aaa;\n  font-size: 1.05rem;\n  line-height: 1.7;\n  margin-bottom: 2.5rem;\n}\n\n.about__stats {\n  display: flex;\n  gap: 2rem;\n}\n\n.about__stat {\n  flex: 1;\n  text-align: center;\n  background: #1e1e1e;\n  border: 1px solid #2a2a2a;\n  border-radius: 12px;\n  padding: 1.5rem;\n}\n\n.about__stat-number {\n  display: block;\n  font-size: 2rem;\n  font-weight: 800;\n  color: var(--primary);\n}\n\n.about__stat-label {\n  color: #888;\n  font-size: 0.9rem;\n}`,
            },
            {
              id: uuid(),
              name: "NotFound.tsx",
              isFolder: false,
              content: `import React from 'react';\nimport { Link } from 'react-router-dom';\nimport './NotFound.css';\n\nconst NotFound: React.FC = () => (\n  <section className="not-found">\n    <h1 className="not-found__code">404</h1>\n    <p className="not-found__text">Page not found</p>\n    <Link to="/" className="not-found__link">Go Home</Link>\n  </section>\n);\n\nexport default NotFound;`,
            },
            {
              id: uuid(),
              name: "NotFound.css",
              isFolder: false,
              content: `.not-found {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 50vh;\n  text-align: center;\n}\n\n.not-found__code {\n  font-size: 6rem;\n  font-weight: 900;\n  color: var(--primary);\n}\n\n.not-found__text {\n  font-size: 1.25rem;\n  color: #888;\n  margin-bottom: 1.5rem;\n}\n\n.not-found__link {\n  padding: 0.6rem 1.5rem;\n  background: var(--primary);\n  color: #fff;\n  border-radius: var(--border-radius);\n  font-weight: 600;\n  transition: background var(--transition);\n}\n\n.not-found__link:hover {\n  background: var(--primary-hover);\n  color: #fff;\n}`,
            },
          ],
        },
        {
          id: uuid(),
          name: "services",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "api.ts",
              isFolder: false,
              content: `const BASE_URL = import.meta.env.VITE_API_URL || 'https://fakestoreapi.com';\n\nclass ApiService {\n  private baseUrl: string;\n\n  constructor(baseUrl: string) {\n    this.baseUrl = baseUrl;\n  }\n\n  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {\n    const res = await fetch(\`\${this.baseUrl}\${endpoint}\`, {\n      headers: { 'Content-Type': 'application/json' },\n      ...options,\n    });\n\n    if (!res.ok) {\n      throw new Error(\`API Error: \${res.status} \${res.statusText}\`);\n    }\n\n    return res.json() as Promise<T>;\n  }\n\n  get<T>(endpoint: string) {\n    return this.request<T>(endpoint);\n  }\n\n  post<T>(endpoint: string, body: unknown) {\n    return this.request<T>(endpoint, {\n      method: 'POST',\n      body: JSON.stringify(body),\n    });\n  }\n\n  put<T>(endpoint: string, body: unknown) {\n    return this.request<T>(endpoint, {\n      method: 'PUT',\n      body: JSON.stringify(body),\n    });\n  }\n\n  delete<T>(endpoint: string) {\n    return this.request<T>(endpoint, { method: 'DELETE' });\n  }\n}\n\nexport const api = new ApiService(BASE_URL);`,
            },
          ],
        },
        {
          id: uuid(),
          name: "types",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "index.ts",
              isFolder: false,
              content: `export interface Product {\n  id: number;\n  title: string;\n  price: number;\n  description: string;\n  category: string;\n  image: string;\n  rating: {\n    rate: number;\n    count: number;\n  };\n}\n\nexport interface User {\n  id: number;\n  name: string;\n  email: string;\n  avatar?: string;\n  role: 'admin' | 'user';\n}\n\nexport interface ApiResponse<T> {\n  data: T;\n  message: string;\n  success: boolean;\n}`,
            },
          ],
        },
        {
          id: uuid(),
          name: "utils",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "cn.ts",
              isFolder: false,
              content: `/**\n * Utility to conditionally join class names together.\n */\nexport function cn(...classes: (string | boolean | undefined | null)[]): string {\n  return classes.filter(Boolean).join(' ');\n}`,
            },
            {
              id: uuid(),
              name: "formatCurrency.ts",
              isFolder: false,
              content: `export function formatCurrency(amount: number, locale = 'en-US', currency = 'USD'): string {\n  return new Intl.NumberFormat(locale, {\n    style: 'currency',\n    currency,\n  }).format(amount);\n}`,
            },
            {
              id: uuid(),
              name: "constants.ts",
              isFolder: false,
              content: `export const APP_NAME = 'MyApp';\nexport const API_URL = import.meta.env.VITE_API_URL || 'https://fakestoreapi.com';\nexport const ITEMS_PER_PAGE = 12;\nexport const DEBOUNCE_DELAY = 300;\n\nexport const ROUTES = {\n  HOME: '/',\n  PRODUCTS: '/products',\n  ABOUT: '/about',\n  CONTACT: '/contact',\n} as const;`,
            },
          ],
        },
        {
          id: uuid(),
          name: "App.tsx",
          isFolder: false,
          content: `import React from 'react';\nimport { BrowserRouter, Routes, Route } from 'react-router-dom';\nimport Layout from './components/layout/Layout';\nimport Home from './pages/Home';\nimport Products from './pages/Products';\nimport About from './pages/About';\nimport NotFound from './pages/NotFound';\n\nconst App: React.FC = () => (\n  <BrowserRouter>\n    <Routes>\n      <Route element={<Layout />}>\n        <Route path="/" element={<Home />} />\n        <Route path="/products" element={<Products />} />\n        <Route path="/about" element={<About />} />\n        <Route path="*" element={<NotFound />} />\n      </Route>\n    </Routes>\n  </BrowserRouter>\n);\n\nexport default App;`,
        },
        {
          id: uuid(),
          name: "main.tsx",
          isFolder: false,
          content: `import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\nimport './assets/styles/globals.css';\n\nReactDOM.createRoot(document.getElementById('root')!).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);`,
        },
        {
          id: uuid(),
          name: "vite-env.d.ts",
          isFolder: false,
          content: `/// <reference types="vite/client" />\n\ninterface ImportMetaEnv {\n  readonly VITE_API_URL: string;\n}\n\ninterface ImportMeta {\n  readonly env: ImportMetaEnv;\n}`,
        },
      ],
    },
    {
      id: uuid(),
      name: ".env",
      isFolder: false,
      content: `VITE_API_URL=https://fakestoreapi.com`,
    },
    {
      id: uuid(),
      name: ".env.example",
      isFolder: false,
      content: `VITE_API_URL=https://fakestoreapi.com`,
    },
    {
      id: uuid(),
      name: ".eslintrc.cjs",
      isFolder: false,
      content: `module.exports = {\n  root: true,\n  env: { browser: true, es2020: true },\n  extends: [\n    'eslint:recommended',\n    'plugin:@typescript-eslint/recommended',\n    'plugin:react-hooks/recommended',\n  ],\n  ignorePatterns: ['dist', '.eslintrc.cjs'],\n  parser: '@typescript-eslint/parser',\n  plugins: ['react-refresh'],\n  rules: {\n    'react-refresh/only-export-components': [\n      'warn',\n      { allowConstantExport: true },\n    ],\n  },\n};`,
    },
    {
      id: uuid(),
      name: ".gitignore",
      isFolder: false,
      content: `# Dependencies\nnode_modules\n\n# Build\ndist\ndist-ssr\n\n# Environment\n.env\n.env.local\n.env.*.local\n\n# Editor\n.vscode/*\n!.vscode/settings.json\n*.swp\n*.swo\n\n# OS\n.DS_Store\nThumbs.db\n\n# Logs\n*.log\nnpm-debug.log*`,
    },
    {
      id: uuid(),
      name: ".prettierrc",
      isFolder: false,
      content: `{\n  "semi": true,\n  "singleQuote": true,\n  "tabWidth": 2,\n  "trailingComma": "es5",\n  "printWidth": 100\n}`,
    },
    {
      id: uuid(),
      name: "package.json",
      isFolder: false,
      content: `{\n  "name": "my-react-app",\n  "private": true,\n  "version": "1.0.0",\n  "type": "module",\n  "scripts": {\n    "dev": "vite",\n    "build": "tsc && vite build",\n    "preview": "vite preview",\n    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"\n  },\n  "dependencies": {\n    "react": "^18.3.1",\n    "react-dom": "^18.3.1",\n    "react-router-dom": "^6.26.0"\n  },\n  "devDependencies": {\n    "@types/react": "^18.3.4",\n    "@types/react-dom": "^18.3.0",\n    "@typescript-eslint/eslint-plugin": "^8.2.0",\n    "@typescript-eslint/parser": "^8.2.0",\n    "eslint": "^9.9.0",\n    "eslint-plugin-react-hooks": "^5.1.0",\n    "eslint-plugin-react-refresh": "^0.4.9",\n    "typescript": "^5.5.4",\n    "vite": "^5.4.2"\n  }\n}`,
    },
    {
      id: uuid(),
      name: "README.md",
      isFolder: false,
      content: `# My React App\n\nA modern React application built with TypeScript and Vite.\n\n## Features\n\n- ⚡ Vite for blazing fast development\n- 🔷 TypeScript for type safety\n- 🧭 React Router for client-side routing\n- 🎨 CSS Modules & custom properties\n- 📦 Clean project structure\n\n## Getting Started\n\n\`\`\`bash\n# Install dependencies\nnpm install\n\n# Start development server\nnpm run dev\n\n# Build for production\nnpm run build\n\n# Preview production build\nnpm run preview\n\`\`\`\n\n## Project Structure\n\n\`\`\`\nsrc/\n├── assets/          # Static assets & global styles\n├── components/      # Reusable UI components\n│   ├── common/      # Button, Input, Modal, Spinner\n│   └── layout/      # Header, Footer, Layout\n├── hooks/           # Custom React hooks\n├── pages/           # Page components\n├── services/        # API service layer\n├── types/           # TypeScript type definitions\n├── utils/           # Utility functions\n├── App.tsx          # Root component with routing\n└── main.tsx         # Entry point\n\`\`\`\n\n## License\n\nMIT`,
    },
    {
      id: uuid(),
      name: "tsconfig.json",
      isFolder: false,
      content: `{\n  "compilerOptions": {\n    "target": "ES2020",\n    "useDefineForClassFields": true,\n    "lib": ["ES2020", "DOM", "DOM.Iterable"],\n    "module": "ESNext",\n    "skipLibCheck": true,\n    "moduleResolution": "bundler",\n    "allowImportingTsExtensions": true,\n    "resolveJsonModule": true,\n    "isolatedModules": true,\n    "noEmit": true,\n    "jsx": "react-jsx",\n    "strict": true,\n    "noUnusedLocals": true,\n    "noUnusedParameters": true,\n    "noFallthroughCasesInSwitch": true,\n    "baseUrl": ".",\n    "paths": {\n      "@/*": ["src/*"]\n    }\n  },\n  "include": ["src"],\n  "references": [{ "path": "./tsconfig.node.json" }]\n}`,
    },
    {
      id: uuid(),
      name: "tsconfig.node.json",
      isFolder: false,
      content: `{\n  "compilerOptions": {\n    "composite": true,\n    "skipLibCheck": true,\n    "module": "ESNext",\n    "moduleResolution": "bundler",\n    "allowSyntheticDefaultImports": true\n  },\n  "include": ["vite.config.ts"]\n}`,
    },
    {
      id: uuid(),
      name: "vite.config.ts",
      isFolder: false,
      content: `import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\nimport path from 'path';\n\nexport default defineConfig({\n  plugins: [react()],\n  resolve: {\n    alias: {\n      '@': path.resolve(__dirname, './src'),\n    },\n  },\n  server: {\n    port: 3000,\n    open: true,\n  },\n  build: {\n    outDir: 'dist',\n    sourcemap: true,\n  },\n});`,
    },
  ],
};
