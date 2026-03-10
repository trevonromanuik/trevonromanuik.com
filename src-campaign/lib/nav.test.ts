import {describe, it, expect} from 'vitest';
import {navItems} from '@/lib/nav';

describe('navItems', () => {
  it('contains exactly five items', () => {
    expect(navItems).toHaveLength(5);
  });

  it('includes all required sections', () => {
    const labels = navItems.map((item) => item.label);
    expect(labels).toContain('Introduction');
    expect(labels).toContain('Food');
    expect(labels).toContain('Housing');
    expect(labels).toContain('Healthcare');
    expect(labels).toContain('Elections');
  });

  it('every item has a label and an anchor href', () => {
    for (const item of navItems) {
      expect(item.label).toBeTruthy();
      expect(item.href).toMatch(/^#/);
    }
  });

  it('hrefs match section ids used in the page', () => {
    const expectedHrefs = ['#intro', '#food', '#housing', '#healthcare', '#elections'];
    const actualHrefs = navItems.map((item) => item.href);
    expect(actualHrefs).toEqual(expectedHrefs);
  });
});

