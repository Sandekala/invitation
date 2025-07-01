export const useAssets = (path: string): string => {
  const assets = import.meta.glob('@/assets/images/**/*', {
    eager : true,
    import: 'default',
  })

  return assets[path] as string
}
