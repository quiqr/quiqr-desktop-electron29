{
  description = "Quiqr Desktop DevShell";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
       let
         pkgs = import nixpkgs {
           system = system;
         };
       in
       {
         devShells = {
           default = pkgs.mkShell {

           ELECTRON_OVERRIDE_DIST_PATH = "${pkgs.electron_29}/bin/";

             buildInputs = [

#               pkgs.p7zip
#               pkgs.xdg-utils
#
#               pkgs-unstable.hugo
#               myPackages.embgit

#               pkgs.electron_27-bin

               pkgs.nodejs
               pkgs.nodePackages.typescript
               pkgs.nodePackages.typescript-language-server
             ];
           };
         };
       }
    );
}
