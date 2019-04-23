/**
 * Para prevenir problemas de importarcion de servicios
 * se agrupa a todos los servicios en un archivo index.
 * Se los pone de tipo export para poder exportarlos en caso de que yo decida 
 * mover esta carpeta a otra parte.
 */

export { SettingsService } from './settings/settings.service';
export { SharedService } from './shared/shared.service';
export { SidebarService } from './shared/sidebar.service';
