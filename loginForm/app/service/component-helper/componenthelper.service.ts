import { Injectable } from '@angular/core';
import { ButtonComponent } from 'src/app/comopnent/button/button.component';
import { FormPanelComponent } from 'src/app/comopnent/form-panel/form-panel.component';
import { ImageComponent } from 'src/app/comopnent/image/image.component';
import { PasswordComponent } from 'src/app/comopnent/password/password.component';
import { TextFieldComponent} from 'src/app/comopnent/text-field/text-field.component';
import { TitleComponent } from 'src/app/comopnent/title/title.component';

@Injectable({
  providedIn: 'root'
})
export class ComponenthelperService {

  constructor() { }
  determineComponent(componentType: string) {
    switch (componentType) {
      case 'formPanel': 
        return FormPanelComponent;
      case 'textField':
        return TextFieldComponent;
      case 'passwordField':
        return PasswordComponent;
      case 'button':
        return ButtonComponent;
      case 'image':
        return ImageComponent;
      // case 'divider':
      //   return DividerComponent;
      // case 'menuListItem':
      //   return MenuListItemComponent;
      // case 'iconText':
      //   return IconTextComponent;
      // case 'sidenav':
      //   return SideNavComponent;
      // case 'dropDown':
      //   return DropDownComponent;
      case 'title':
        return TitleComponent;
      // case 'toolbar':
      //   return ToolbarComponent;
      // case 'ExpansionPanel':
      //   return ExpansionPanelComponent;
      // case 'iconbutton':
      //   return IconbuttonComponent;
      // case 'checkbox':
      //   return CheckboxComponent;
      // case 'nativeDropdown':
      //   return DropdownComponent;
      // case 'page':
      //   return PageComponent;
      // case 'buttonToggle':
      //   return ButtonToggleComponent;
      // case 'taskPanel':
      //   return TaskPanelComponent;
      // case 'pdfViewer':
      //   return PdfViewerComponent;
      // case 'grid':
      //   return MatGridComponent;
      // case 'label':
      //   return LabelComponent;
      // case 'compoList':
      //   return ComponentListComponent;
      // case 'flexFields':
      //   return FlexFieldsComponent;
      // case 'menutree':
      //   return MenuTreeComponent;
      // case 'link':
      //   return LinkComponent;
      // case 'breadcrumb':
      //   return BreadcrumbComponent;
      // case 'textarea':
      //   return TextareaComponent;
      // case 'radioButtonGroup':
      //   return RadioboxGroupComponent;
      // case 'disabled':
      //   return DisabledComponent;
      // case 'table':
      //   return TableComponent;
      // case 'radioButton':
      //   return RadioboxComponent;
      // case 'dropdownWithSearch':
      //   return DropdownWithSearchTwoComponent;
      // case 'block-text':
      //   return BlockTextComponent;
      // case 'inline-text':
      //   return InlineTextComponent;
      // case 'actionToggle':
      //   return ToggleActionsComponentComponent;
      // case 'recordUnitPartInfo':
      //   return RecordUnitPartInfoComponent;
      // case 'spacer':
      //   return SpacerComponent;
      // case 'showMore':
      //   return ShowmoreTextComponent;
      // case 'contentRenderer':
      //   return ContentRendererComponent;
      // case 'passiveLink':
      //   return PassiveLinkComponent;
      // case 'videoCam':
      //   return VideoCamComponent;
      // case 'dynamicItemRender':
      //   return DynamicItemRender;
      // case 'dynamicTaskRender':
      //   return DynamicTaskComponent;
      // case 'imageGrid':
      //   return ImageGridComponent;
      // case 'subProcess':
      //   return SubProcessComponent;
      // case 'autoComplete':
      //   return DropdownAutocompleteComponent;
      // case 'dropdownWithMultiSelect':
      //   return DropDownWithMultiSelectComponent;
      // case 'dellLastNoteRepairInfoTaskPanels':
      //   return DellRepairInfoLastNoteTaskPanelsComponent;
      // case 'searchFliter':
      //   return SearchFilterComponent;
  
    }
    return true;
  }
}
