import { describe, it, expect } from 'vitest';
import { navItems } from '@/lib/nav';

describe('navItems', () => {
  it('contains exactly four items', () => {
    expect(navItems).toHaveLength(4);
  });

  it('includes all required sections', () => {
    const labels = navItems.map((item) => item.label);
    expect(labels).toContain('Background');
    expect(labels).toContain("Men's Shed");
    expect(labels).toContain('Ritchie Community League');
    expect(labels).toContain('Contact');
  });

  it('every item has a label and an anchor href', () => {
    for (const item of navItems) {
      expect(item.label).toBeTruthy();
      expect(item.href).toMatch(/^#/);
    }
  });

  it('hrefs match section ids used in the page', () => {
    const expectedHrefs = ['#background', '#mens-shed', '#ritchie', '#contact'];
    const actualHrefs = navItems.map((item) => item.href);
    expect(actualHrefs).toEqual(expectedHrefs);
  });
});

