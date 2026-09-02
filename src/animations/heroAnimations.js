import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initHeroAnimation() {
  const context = gsap.context(() => {
    gsap.from('.reveal-hero', { y: 28, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out' })
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.to('.portrait-wrap', { yPercent: 10, scale: 0.94, rotation: 2, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to('.hero-copy', { yPercent: -12, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
    }
  })
  return () => context.revert()
}