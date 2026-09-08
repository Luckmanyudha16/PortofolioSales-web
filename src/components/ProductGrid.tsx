'use client';

import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PRODUCTS_DATA, ProductItem } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import ProductDetail from '@/components/ProductDetail';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

interface ProductGridProps {
  initialCategory?: string;
  title?: string;
  showAllLink?: boolean;
}

export default function ProductGrid({ initialCategory = 'all' }: ProductGridProps) {
  const { lang, t } = useLanguage();
  const [selectedCat, setSelectedCat] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const categories = [
    { id: 'all', label: { id: 'Semua Produk', en: 'All Products' } },
    { id: 'custom', label: { id: 'Mesin Custom & Turnkey', en: 'Custom Plants & Turnkey' } },
    { id: 'pre-harvest', label: { id: 'Alsintan Pra-Panen', en: 'Pre-Harvest Machinery' } },
    { id: 'harvest', label: { id: 'Alsintan Panen', en: 'Harvesting Machinery' } },
    { id: 'post-harvest', label: { id: 'Pengering & RMU Padi', en: 'Dryers & Rice Mills' } },
    { id: 'modular', label: { id: 'Unit Modular Parsial', en: 'Modular Components' } },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((item) => {
      const matchCat = selectedCat === 'all' || item.category === selectedCat;
      const q = searchQuery.toLowerCase();
      const matchSearch =
        !q ||
        item.name.id.toLowerCase().includes(q) ||
        item.name.en.toLowerCase().includes(q) ||
        item.tagline.id.toLowerCase().includes(q) ||
        item.tagline.en.toLowerCase().includes(q) ||
        item.description.id.toLowerCase().includes(q) ||
        item.description.en.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [selectedCat, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCat === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCat(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label[lang]}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px] sm:min-w-[280px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('Cari nama mesin, tipe engine...', 'Search machine, engine type...')}
            className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>
      </div>

      {/* Result Count Indicator */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          {t(
            `Menampilkan ${filteredProducts.length} produk rekayasa industri & alsintan terverifikasi`,
            `Showing ${filteredProducts.length} verified industrial & agricultural machines`
          )}
        </span>
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="text-amber-400 hover:underline"
          >
            {t('Hapus pencarian', 'Clear search')}
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800/80">
          <p className="text-slate-400 text-sm">
            {t(
              'Tidak ada produk yang cocok dengan kriteria pencarian Anda.',
              'No products found matching your filter criteria.'
            )}
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCat('all');
              setSearchQuery('');
            }}
            className="mt-3 text-xs font-semibold text-amber-400 hover:underline"
          >
            {t('Reset Filter', 'Reset Filters')}
          </button>
        </div>
      )}

      {/* Product Detail Modal */}
      <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
