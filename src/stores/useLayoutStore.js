import { create } from 'zustand'

/**
 * Layout Store
 * Manages global layout state including navigation, header, and UI state
 */
export const useLayoutStore = create((set) => ({
  // Navigation state
  isNavOpen: false,
  currentPage: 'home',
  
  // Header state
  pageTitle: '',
  breadcrumbs: [],
  
  // UI state
  isScrolled: false,
  
  // Actions
  toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
  closeNav: () => set({ isNavOpen: false }),
  openNav: () => set({ isNavOpen: true }),
  
  setCurrentPage: (page) => set({ currentPage: page }),
  
  setPageTitle: (title) => set({ pageTitle: title }),
  setBreadcrumbs: (breadcrumbs) => set({ breadcrumbs }),
  
  setIsScrolled: (scrolled) => set({ isScrolled: scrolled }),
}))

