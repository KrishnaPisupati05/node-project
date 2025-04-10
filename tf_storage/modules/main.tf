
# Define the resource group where the Logic App will be created
resource "azurerm_resource_group" "management-rg" {
  name     = "management-rg"
  location = "West Europe"
}
